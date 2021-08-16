#!/bin/bash

set -euxo pipefail

if [[ -z $STACK_VERSION ]]; then
  echo -e "\033[31;1mERROR:\033[0m Required environment variable [STACK_VERSION] not set\033[0m"
  exit 1
fi

MAJOR_VERSION=`echo ${STACK_VERSION} | cut -c 1`

docker network create elastic

for (( node=1; node<=${NODES-1}; node++ ))
do
  port_com=$((9300 + $node - 1))
  UNICAST_HOSTS+="es$node:${port_com},"
done

for (( node=1; node<=${NODES-1}; node++ ))
do
  port=$((PORT + $node - 1))
  port_com=$((9300 + $node - 1))
  if [ "x${MAJOR_VERSION}" == 'x6' ]; then
    docker run \
      --rm \
      --env "node.name=es${node}" \
      --env "cluster.name=docker-elasticsearch" \
      --env "cluster.routing.allocation.disk.threshold_enabled=false" \
      --env "bootstrap.memory_lock=true" \
      --env "ES_JAVA_OPTS=-Xms1g -Xmx1g" \
      --env "xpack.security.enabled=false" \
      --env "xpack.license.self_generated.type=basic" \
      --env "discovery.zen.ping.unicast.hosts=${UNICAST_HOSTS}" \
      --env "discovery.zen.minimum_master_nodes=${NODES}" \
      --env "http.port=${port}" \
      --ulimit nofile=65536:65536 \
      --ulimit memlock=-1:-1 \
      --publish "${port}:${port}" \
      --publish "${port_com}:${port_com}" \
      --detach \
      --network=elastic \
      --name="es${node}" \
      amazon/opendistro-for-elasticsearch:${STACK_VERSION}
  elif [ "x${MAJOR_VERSION}" == 'x7' ] || [ "x${MAJOR_VERSION}" == 'x8' ]; then
    docker run \
      --rm \
      --env "node.name=es${node}" \
      --env "cluster.name=docker-elasticsearch" \
      --env "cluster.initial_master_nodes=es1" \
      --env "discovery.seed_hosts=es1" \
      --env "cluster.routing.allocation.disk.threshold_enabled=false" \
      --env "bootstrap.memory_lock=true" \
      --env "ES_JAVA_OPTS=-Xms1g -Xmx1g" \
      --env "xpack.security.enabled=false" \
      --env "xpack.license.self_generated.type=basic" \
      --env "http.port=${port}" \
      --env "action.destructive_requires_name=false" \
      --ulimit nofile=65536:65536 \
      --ulimit memlock=-1:-1 \
      --publish "${port}:${port}" \
      --detach \
      --network=elastic \
      --name="es${node}" \
      amazon/opendistro-for-elasticsearch:${STACK_VERSION}
  fi
done

docker run \
  --network elastic \
  --rm \
  appropriate/curl \
  --max-time 120 \
  --retry 120 \
  --retry-delay 1 \
  --retry-connrefused \
  --show-error \
  --silent \
  http://es1:$PORT

sleep 10

echo "Opensearchsearchs up and running"
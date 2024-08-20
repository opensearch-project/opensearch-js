#!/bin/bash

for attempt in {1..20}; do
  echo "----- Waiting... $attempt";
  sleep 5; \
  if [ "$SECURE_INTEGRATION" = "true" ]; then
    if curl -s -k https://localhost:9200; then
      echo '----- Secured cluster ready' && exit 0;
    fi;
  else
    if curl -s http://localhost:9200; then
      echo '-----  Unsecured cluster ready' && exit 0;
    fi;
  fi;
done;

echo '----- Timeout waiting for cluster to be ready';
exit 1;

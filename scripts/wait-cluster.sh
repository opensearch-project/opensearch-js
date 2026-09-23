#!/bin/bash

for attempt in {1..20}; do
  echo "----- Waiting... $attempt";
  sleep 5; \
  if [ "$SECURE_INTEGRATION" = "true" ]; then
    # 401 = security plugin initialized; 503 = not yet initialized.
    if [ "$(curl -s -k -o /dev/null -w '%{http_code}' https://localhost:9200)" = "401" ]; then
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

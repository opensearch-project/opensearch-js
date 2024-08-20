cluster.opensearch.build:
	docker compose --project-directory .ci/opensearch build;

cluster.opensearch.start:
	docker compose --project-directory .ci/opensearch up -d ; \
	for attempt in {1..20}; do \
		echo '=====> waiting...'; \
		sleep 5; \
		if [ "$$SECURE_INTEGRATION" = "true" ]; then \
			if curl -s -k https://localhost:9200; then echo '=====> secured cluster ready' && exit 0; fi; \
		else \
			if curl -s http://localhost:9200; then echo '=====> unsecured cluster ready' && exit 0; fi; \
		fi; \
	done; \
	exit 1;

cluster.opensearch.stop:
	docker compose --project-directory .ci/opensearch down;

cluster.clean: ## Remove unused Docker volumes and networks
	@printf "\033[2m→ Cleaning up Docker assets...\033[0m\n"
	docker volume prune --force
	docker network prune --force
	docker system prune --volumes --force

.PHONY: cluster.opensearch.build cluster.opensearch.start cluster.opensearch.stop cluster.clean
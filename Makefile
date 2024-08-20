cluster.opensearch.build:
	docker compose --project-directory .ci/opensearch build;

cluster.opensearch.start:
	docker compose --project-directory .ci/opensearch up -d;
	bash ./scripts/wait-cluster.sh;

cluster.opensearch.stop:
	docker compose --project-directory .ci/opensearch down;

cluster.clean: ## Remove unused Docker volumes and networks
	@printf "\033[2m→ Cleaning up Docker assets...\033[0m\n"
	docker volume prune --force
	docker network prune --force
	docker system prune --volumes --force

.PHONY: cluster.opensearch.build cluster.opensearch.start cluster.opensearch.stop cluster.clean
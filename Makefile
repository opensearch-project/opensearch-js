cluster.opendistro.build:
	docker-compose --project-directory .ci/opendistro build;

cluster.opendistro.start:
	docker-compose --project-directory .ci/opendistro up -d ;
	sleep 20;

cluster.opendistro.stop:
	docker-compose --project-directory .ci/opendistro down ;

cluster.opendistro.secure.build:
	docker-compose -f .ci/opendistro/docker-compose-secure.yml build ;

cluster.opendistro.secure.start:
	docker-compose -f .ci/opendistro/docker-compose-secure.yml up -d ;
	sleep 20;

cluster.opendistro.secure.stop:
	docker-compose -f .ci/opendistro/docker-compose-secure.yml down ;

cluster.opensearch.build:
	docker-compose --project-directory .ci/opensearch build;

cluster.opensearch.start:
	docker-compose --project-directory .ci/opensearch up -d ;
	sleep 20;

cluster.opensearch.stop:
	docker-compose --project-directory .ci/opensearch down ;

cluster.opensearch.secure.build:
	docker-compose -f .ci/opensearch/docker-compose-secure.yml build ;

cluster.opensearch.secure.start:
	docker-compose -f .ci/opensearch/docker-compose-secure.yml up -d ;
	sleep 20;

cluster.opensearch.secure.stop:
	docker-compose -f .ci/opensearch/docker-compose-secure.yml down ;

cluster.clean: ## Remove unused Docker volumes and networks
	@printf "\033[2m→ Cleaning up Docker assets...\033[0m\n"
	docker volume prune --force
	docker network prune --force
	docker system prune --volumes --force

.PHONY: cluster.opendistro.build cluster.opendistro.start cluster.opendistro.stop cluster.opensearch.build cluster.opensearch.start cluster.opensearch.stop cluster.clean

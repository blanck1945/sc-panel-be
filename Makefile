build-db-dev:
	@echo "Building database..."
	docker-compose up -d

run-seeders:
	node ace db:seed --files "./database/seeders/User.ts"
	node ace db:seed --files "./database/seeders/Company.ts"
	node ace db:seed --files "./database/seeders/Supplier.ts"
	node ace db:seed --files "./database/seeders/Invoice.ts"

psql-dev:
	@echo "Connecting to database..."
	docker exec -it 27a6cf40d375 psql -U admin -d sc-panel

psql-login:
	docker exec -it e4b53f3619b3 psql -U papi

PHONY: build-db-dev psql-dev

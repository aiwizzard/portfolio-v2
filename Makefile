change-deploy-app:
	@git pull origin
	@docker-compose build app

	@docker-compose up --no-deps -d app

change-deploy-frontend:
	@git pull origin
	@docker-compose build frontend

	@docker-compose up --no-deps -d frontend

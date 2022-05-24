change-deploy:
	@git pull origin
	@docker-compose build app

	@docker-compose up --no-deps -d app

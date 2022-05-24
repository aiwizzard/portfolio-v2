change-deploy:
	@git pull origin
	@docker-compose build app frontend

	@docker-compose up --no-deps -d app frontend

server {
	listen 80;
	
    

    location / {
        proxy_pass http://frontend:3000;
    }

	location /api {
		client_max_body_size 25m;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header Host $host;

		proxy_pass http://app:8000;

		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
	}

	location /static_backend {
		alias /vol/static;
	}
}
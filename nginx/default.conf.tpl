server {
	listen 80;
	listen 443 ssl;
	
    server_name ajmalk.com;

	return 301 https://$host$request_uri;
	
	ssl_certificate /etc/nginx/certs/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/privkey.pem;

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
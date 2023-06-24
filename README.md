# Node-docker

1. Build command format
```
docker build -t <image_name>:<version> <build_path>
```

2. Build the image
```
docker build -t myapp:0.0.1 .
```

3. Use docker container run the container 
```
docker container run -d --name myapp -p 8000:8099 myapp:0.0.1
```

8000 = local machine port
<br>
8099 = docker(node) machine port


# In docker compose method
docker-compose.yaml
```
docker-compose up -d
```

-d = background run

Reference:
https://docs.docker.com/engine/reference/commandline/build/

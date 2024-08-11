sudo docker run -d \
  --name my-node-server \
  -p 3000:3000 \
  --restart unless-stopped \
  my-node-server
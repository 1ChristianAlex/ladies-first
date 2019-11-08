frontend="./frontend"
backend="./backend"
docker="docker-compose.yml"

git pull origin master
if [ -f "$docker" ]; then
docker-compose start
echo "Docker ready"
else
echo "File does not exist"
fi

if [ -d "./backend" ]
then
	echo "$backend found."
	cd $backend && npm run dev &
else
	echo "$backend not found."
fi
if [ -d "./frontend" ]
then
	echo "$frontend found."
	cd $frontend && npm run start 
	wait 
else
	echo "$frontend not found."
fi
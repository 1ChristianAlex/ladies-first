echo "Building backend"
cd ./backend && npm run build
wait
 

echo "Building frontend"
cd ../frontend && npm run build
wait

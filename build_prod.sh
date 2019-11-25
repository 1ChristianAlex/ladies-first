if [ -d "./build/" ]
then
    echo "Build existe"
else
    echo "Criando pasta build/" 
    mkdir ./build/
    wait
fi

if [ -d "./build/backend" ]
then
    echo "Existe build/backend" 

else
    echo "Criando pasta build/backend" 
    mkdir ./build/backend 
    wait
fi

if [ -d "./build/frontend" ]
then
    echo "Criando pasta build/frontend" 

else
    echo "Criando pasta build/frontend" 
    mkdir ./build/frontend 
    wait
fi

echo "Building backend"
cd ./backend && npm run build
wait
 
cp ./backend/package.json ./build/backend
wait 

cd ./build/backend && npm i
wait

echo "Building frontend"
cd ../frontend && npm run build
wait

cd ..
wait

echo "Moving folder..."
mv ./frontend/build ./build/frontend
wait

cp ./frontend/package.json ./build/frontend
cd ./build/frontend && npm i

node ./build/backend/app.js
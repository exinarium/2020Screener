docker build -t cadvisor --build-arg NPM_TOKEN=${NPM_TOKEN} .
docker tag cadvisor creativ360/development:cadvisor
docker push creativ360/development:cadvisor
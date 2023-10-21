# Define variables
$imageName = "lets-talk-dnd-image"
$containerName = "lets-talk-dnd-container"
$hostPort = 4000
$containerPort = 3000

# Check if container is running
$running = docker ps -q -f name=$containerName

if ($running) {
    Write-Host "Stopping and removing existing container..."
    docker stop $containerName
    docker rm $containerName
}

# Check if container exists but is stopped
$exists = docker ps -a -q -f name=$containerName

if ($exists) {
    Write-Host "Removing existing container..."
    docker rm $containerName
}

# Check if the image exists
$imageExists = docker images -q $imageName

if ($imageExists) {
    Write-Host "Removing existing image..."
    docker rmi $imageName
}

# Build the Docker image
docker build -t $imageName .

# Run the Docker container
$dockerRunCommand = "docker run -d --name ${containerName} -p ${hostPort}:${containerPort} -e OPENAI_API_KEY=${env:OPENAI_API_KEY} -e DISCORD_BOT_TOKEN=${env:DISCORD_BOT_TOKEN} ${imageName}"
Invoke-Expression $dockerRunCommand

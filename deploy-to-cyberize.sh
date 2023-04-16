#!/bin/bash

LOCAL_PROJECT="travel-advisor-react-api"
PLESK_PROJECT="traveller.cyberizestaging.com"

SOURCE="/Volumes/HDD50GB/APPS/react-apps/$LOCAL_PROJECT/build"
TARGET="root@cyberizestaging.com:/var/www/vhosts/cyberizestaging.com/$PLESK_PROJECT"
REMOTE_FOLDER="/var/www/vhosts/cyberizestaging.com/$PLESK_PROJECT/*"

echo "--------------------------------------"
echo "Building the App..."
echo "--------------------------------------"
npm run build
echo "--------------------------------------"
echo "Removing old files..."
echo "--------------------------------------"
ssh root@cyberizestaging.com "rm -rf $REMOTE_FOLDER"


echo "--------------------------------------"
echo "Transfering new files..."
echo "--------------------------------------"
# echo "scp -r $SOURCE/* $TARGET/"
scp -r $SOURCE/* $TARGET/

echo "--------------------------------------"
echo "File transfer complete!"
echo "--------------------------------------"
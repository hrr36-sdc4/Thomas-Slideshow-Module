#!/bin/bash
echo "Running script..."
echo "Generating listing records..."
rm ./currentId.txt
rm ./listing_records/*
node ./generate_listings.js
echo "10M records saved."
echo "Generating image records..."
rm ./image_records/*
for i in {0..99}; do
  # generate_images.js generates image records for 100000 listings at a time
  # 5-10 image records are created for each listing record
  # the script creates 10 CSV files each w/ data for 10000 listings (10 * 10000 = 100000)
  # exeucte the script 100 times to generate data for 10M listings (1000 CSV files total)
  # total number of image records should be between 50M and 100M
  node ./generate_images.js $((i * 100000)) $((i * 10))
  echo "$(((i + 1) * 100000)) records saved."
done
rm ./currentId.txt
echo "Data generation complete."
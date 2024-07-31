#!/bin/bash

# Define required packages and their versions
REQUIRED_PACKAGES=(
  "eslint@8.15.0"
  "eslint-config-next@12.2.0"
  "@emotion/react@11.9.3"
  "@emotion/styled@11.9.3"
  "@mui/icons-material@5.8.4"
  "@mui/material@5.8.4"
  "firebase@9.6.10"
  "next@12.2.0"
  "react@18.0.0"
  "react-dom@18.0.0"
)

echo "Checking if required packages are installed..."

# Check for each required package
for PACKAGE in "${REQUIRED_PACKAGES[@]}"; do
  PACKAGE_NAME=$(echo $PACKAGE | cut -d'@' -f1)
  PACKAGE_VERSION=$(echo $PACKAGE | cut -d'@' -f2)
  
  INSTALLED_VERSION=$(npm list $PACKAGE_NAME --depth=0 | grep $PACKAGE_NAME | awk -F'@' '{print $2}')

  if [ "$INSTALLED_VERSION" == "$PACKAGE_VERSION" ]; then
    echo "$PACKAGE_NAME@$PACKAGE_VERSION is installed."
  else
    echo "Error: $PACKAGE_NAME@$PACKAGE_VERSION is not installed. Installed version: $INSTALLED_VERSION"
    exit 1
  fi
done

echo "All required packages are properly installed."


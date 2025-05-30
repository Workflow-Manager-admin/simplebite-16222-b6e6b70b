#!/bin/bash
cd /home/kavia/workspace/code-generation/simplebite-16222-b6e6b70b/simplebite_website
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


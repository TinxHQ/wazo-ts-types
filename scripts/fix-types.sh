#!/bin/bash

# Fix the format of 'Firstname Lastname < number >' strings in confd.ts
sed -i "s/\"Firstname Lastname\" < number >/'Firstname Lastname' < number >/g" ./src/schemas/confd.ts

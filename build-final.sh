#!/bin/bash

mv build/index.html build/index.php

x="<title>Mevive International</title>"
y="<?php include('admin/meta/index.php'); ?>"

sed -i -e "s@$x@$y@g" build/index.php

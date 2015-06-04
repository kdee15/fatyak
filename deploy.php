<?php
  
  # Very simple git deploy script. It literally just does a pull from a branch you specified (default: master). \
  #Feel free to make it nicer than it is now.

  exec('git pull origin staging', $shell_output, $output);
     print_r($shell_output);
     print_r($output)
     
  #Thanks for looking. :-)
  
?>
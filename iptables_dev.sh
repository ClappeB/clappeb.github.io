case $1 in
  open)
    sudo iptables -A INPUT -p tcp --dport 5173 -s 192.168.0.0/16 -j ACCEPT;;
  close)
    sudo iptables -D INPUT -p tcp --dport 5173 -s 192.168.0.0/16 -j ACCEPT;;
  *)
    echo -e "Command not recognized.\nPlease specify \"open\" or \"close\".";;
esac

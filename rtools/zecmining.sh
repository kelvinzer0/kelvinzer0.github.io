sudo apt-get install software-properties-common
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt install nvidia-driver-510
wget https://github.com/nicehash/nheqminer/releases/download/0.5c/Ubuntu_16_04_x64_cuda_djezo_avx_nheqminer-5c.zip
sudo apt-get install unzip
unzip "Ubuntu_16_04_x64_cuda_djezo_avx_nheqminer-5c.zip"
sudo chmod 777 nheqminer_16_04
#nheqminer -l equihash.usa.nicehash.com:3357 -u YOUR_BTC_ADDRESS_HERE.worker1
# ./nheqminer_16_04 -l zen.2miners.com:3030 -u zndN4X5PUyHw1sEjvEZ9FQ1RkMaMd3QZjnS -p x
# ./nheqminer_16_04 -l zec.f2pool.com:3357 -u kelvincruv.001 -p 21235365876986800 -t 100

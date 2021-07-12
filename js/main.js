fetch("https://api.github.com/users/NabinDagami")
            .then(response => response.json())
            .then(function(data) {
                //console.log(data)

                let followersCount = data['followers']
                let followersInfo = `I have been followed by ${followersCount} on Github.`
                document.getElementById('profileImage').src = data['avatar_url']
                document.getElementById('fullName').textContent = data['name']
                document.getElementById('bio').textContent = data['bio']
                document.getElementById('followersInformation').textContent = followersInfo
                document.getElementById('githubLink').href = data['html_url']

                document.getElementById('mainContainer').hidden = false
                document.getElementById('loading').hidden = true
            })

fetch("https://api.github.com/users/NabinDagami/repos")
            .then(response => response.json())
            .then(function(reposData) {

                let repos = reposData
                var element = document.getElementById("list");

                for (let items of repos) {
                    var tag = document.createElement("li");
                    var link = document.createElement("a");
                    tag.appendChild(link);
                    link.innerHTML = items.name;
                    link.href = items.html_url;
                    element.appendChild(tag);
                }
            })
            

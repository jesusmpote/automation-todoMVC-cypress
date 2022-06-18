(async () => {
      const MailosaurClient = require('mailosaur')
    
      // Available in the API tab of a server
      const apiKey = 'WGm6w9QKScavcduN'
      const serverId = 'xvifin8j'
      const serverDomain = 'xvifin8j.mailosaur.net'
    
      const mailosaur = new MailosaurClient(apiKey)
    
      const criteria = {
        sentTo: 'test.beu@' + serverDomain
      }
    
      const email = await mailosaur.messages.get(serverId, criteria)
    
      console.log(`Subject: ${email.subject}`)
    })()

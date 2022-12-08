export const Messages = {
  'en-US': {
    authenticate: 'Please, authenticate:',
    welcome: 'Welcome to Pragmatismo.io GeneralBots Administration.',
    which_task: 'Which task do you wanna run now?',
    working: command => `I'm working on ${command}...`,
    finished_working: 'Done.',
    unknown_command: text =>
      `Well, but ${text} is not a administrative General Bots command, I will try to search for it.`,
    hi: text => `Hello, ${text}.`,
    undeployPackage: text => `Undeploying package ${text}...`,
    deployPackage: text => `Deploying package ${text}...`,
    redeployPackage: text => `Redeploying package ${text}...`,
    packageUndeployed: text => `√ Package ${text} undeployed...`,
    consent: url => `Please, consent access to this app at: [Microsoft Online](${url}).`,
    wrong_password: 'Sorry, wrong password. Please, try again.',
    enter_authenticator_tenant: 'Enter the Authenticator Tenant (eg.: domain.onmicrosoft.com):',
    enter_authenticator_authority_host_url: 'Enter the Authority Host URL (eg.: https://login.microsoftonline.com): ',
    enter_authenticator_client_id: `Enter the Client Id GUID: Get from
    [this url](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview)`,
    enter_authenticator_client_secret: 'Enter the Client Secret:',
    publish_must_be_admin: 'Seu telefone precisa estar com privilégios administrativos para realizar publicação.',
    publish_success: 'Publicação realizada.',
    publish_type_yes: 'Por favor, digite *Sim* para continuar com a publicação.',
    publish_canceled: 'Publicação cancelada.'
  },
  'pt-BR': {
    authenticate: 'Please, authenticate:',
    welcome: 'Welcome to Pragmatismo.io GeneralBots Administration.',
    which_task: 'Which task do you wanna run now?',
    working: command => `I'm working on ${command}...`,
    finished_working: 'Done.',
    unknown_command: text =>
      `Well, but ${text} is not a administrative General Bots command, I will try to search for it.`,
    hi: text => `Hello, ${text}.`,
    undeployPackage: text => `Undeploying package ${text}...`,
    deployPackage: text => `Deploying package ${text}...`,
    redeployPackage: text => `Redeploying package ${text}...`,
    packageUndeployed: text => `Package ${text} undeployed...`,
    consent: url => `Please, consent access to this app at: [Microsoft Online](${url}).`,
    wrong_password: 'Sorry, wrong password. Please, try again.',
    enter_authenticator_tenant: 'Enter the Authenticator Tenant (eg.: domain.onmicrosoft.com):',
    enter_authenticator_authority_host_url: 'Enter the Authority Host URL (eg.: https://login.microsoftonline.com): ',
    enter_authenticator_client_id: `Enter the Client Id GUID: Get from
    [this url](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview)`,
    enter_authenticator_client_secret: 'Enter the Client Secret:',
    publish_must_be_admin: 'Seu telefone precisa estar com privilégios administrativos para realizar publicação.',
    publish_success: 'Publicação realizada.',
    publish_type_yes: 'Por favor, digite *Sim* para continuar com a publicação.',
    publish_canceled: 'Publicação cancelada.'
  }
};

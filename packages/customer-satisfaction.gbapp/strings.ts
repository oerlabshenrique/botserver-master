export const Messages = {
  'en-US': {
    about_suggestions: 'Suggestions are welcomed and improve my quality...',
    what_about_service: 'What about my service?',
    glad_you_liked: "I'm glad you liked. I'm here for you.",
    we_will_improve: "Let's take note of that, thanks for sharing.",
    what_about_me: 'What about the service, please rate between 1 and 5.',
    thanks: 'Thanks!',
    im_sorry_lets_try: "I'm sorry. Let's try again...",
    great_thanks: 'Great, thanks for sharing your thoughts.',
    please_no_bad_words: 'Please, no bad words.',
    please_wait_transfering: 'Please, wait while I find an agent to answer you.',
    notify_agent: name =>
      `New call available for *${name}*, you can answer right here when you are finished, type /qt.`,
    notify_end_transfer: botName => `All messages will be now routed to user ${botName}.`,
    notify_agent_transfer_done: person => `Now talking directly to ${person}.`,
    check_whatsapp_ok: 'If you are seeing this message, WhatsApp API is OK.'
  },
  'pt-BR': {
    about_suggestions: 'Sugestões melhoram muito minha qualidade...',
    what_about_service: 'O que achou do meu atendimento?',
    glad_you_liked: 'Bom saber que você gostou. Conte comigo.',
    we_will_improve: 'Vamos registrar sua questão, obrigado pela sinceridade.',
    what_about_me: 'O que achou do meu atendimento, de 1 a 5?',
    thanks: 'Obrigado!',
    im_sorry_lets_try: 'Desculpe-me, vamos tentar novamente.',
    great_thanks: 'Ótimo, obrigado por contribuir com sua resposta.',
    please_no_bad_words: 'Por favor, sem palavrões!',
    please_wait_transfering: 'Por favor, aguarde enquanto eu localizo alguém para te atender.',
    notify_agent: name =>
      `Existe um novo atendimento para *${name}*, por favor, responda aqui mesmo para a pessoa. Para finalizar, digite /qt.`,
    notify_end_transfer: botName => `Falando novamente com  o bot ${botName}.`,
    notify_agent_transfer_done: person => `Todas as mensagens agora sendo transmitidas para ${person}.`,
    check_whatsapp_ok: 'Se você está recebendo esta mensagem, significa que a API do WhatsApp está OK.'
  }
};

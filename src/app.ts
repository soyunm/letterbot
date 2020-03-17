import * as core from '@actions/core';
import parser from './parser';
import discord from './lib/discord';
// import slack from './lib/slack';

(async () => {
  const WEBHOOKS = core.getInput('WEBHOOKS') ;
  const webhookList = WEBHOOKS.split(',');

  const parsed = await parser();

  webhookList.map(async url => {
    if (url.includes('discordapp.com')) { // discord webhook
      console.log(parsed);
      await discord({
        ...parsed,
        url
      });
    } else if (url.includes('hooks.slack.com')) { //slack webhook

    }
  });
})();
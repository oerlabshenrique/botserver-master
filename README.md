<<<<<<< HEAD
# botserver-master
=======
| Area                         | Status                                                                                             |
|------------------------------|----------------------------------------------------------------------------------------------------|
| Releases                     | [![General Bots](https://img.shields.io/npm/dt/botserver.svg?logo=npm&label=botserver)](https://www.npmjs.com/package/botserver/) [![.gbapp lib](https://img.shields.io/npm/dt/botlib.svg?logo=npm&label=botlib)](https://www.npmjs.com/package/botlib/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)|
| Community                    | [![StackExchange](https://img.shields.io/stackexchange/stackoverflow/t/generalbots.svg)](https://stackoverflow.com/questions/tagged/generalbots)  [![Open-source](https://badges.frapsoft.com/os/v2/open-source.svg)](https://badges.frapsoft.com) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/badge/license-AGPL-blue.svg)](https://github.com/GeneralBots/BotServer/blob/master/LICENSE.txt)|
| Management                   | [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://gitHub.com/GeneralBots/BotServer/graphs/commit-activity) |
| Security                     | [![Known Vulnerabilities](https://snyk.io/test/github/GeneralBots/BotServer/badge.svg)](https://snyk.io/test/github/GeneralBots/BotServer) |
| Building & Quality           | [![Build Status](https://travis-ci.com/GeneralBots/BotServer.svg?branch=master)](https://travis-ci.com/GeneralBots/BotServer)  [![Coverage Status](https://coveralls.io/repos/github/GeneralBots/BotServer/badge.svg)](https://coveralls.io/github/GeneralBots/BotServer) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) |
| Packaging                    | [![forthebadge](https://badge.fury.io/js/botserver.svg)](https://badge.fury.io) [![ZipFile](https://camo.githubusercontent.com/0150c0f148d50fe9750ebc5d313581da699a8c50/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7a69702d646f776e6c6f61642d626c75652e737667)](https://github.com/GeneralBots/BotServer/releases/latest) [![Dependencies](https://david-dm.org/GeneralBots/botserver.svg)](https://david-dm.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) |
| Samples                      | [VBA](https://github.com/GeneralBots/BotServer/tree/master/packages/default.gbdialog) or [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/GeneralBots/AzureADPasswordReset.gbapp)
| [Docker Image](https://github.com/lpicanco/docker-botserver) | ![Docker Automated build](https://img.shields.io/docker/automated/lpicanco/botserver.svg) ![Docker Build Status](https://img.shields.io/docker/build/lpicanco/botserver.svg) ![MicroBadger Size](https://img.shields.io/microbadger/image-size/lpicanco/botserver.svg) ![MicroBadger Layers](https://img.shields.io/microbadger/layers/lpicanco/botserver.svg) ![Docker Pulls](https://img.shields.io/docker/pulls/lpicanco/botserver.svg) <br/> *Provided by [@lpicanco](https://github.com/lpicanco/docker-botserver)* |

General Bots
------------------

![General Bot Logo](https://raw.githubusercontent.com/pragmatismo-io/BotServer/master/logo.png)

General Bot is a strongly typed package based chat bot server focused in convention over configuration and code-less approaches, which brings software packages and application server concepts to help parallel bot development.

## What is a Bot Server?

Bot Server accelerates the process of developing a bot. It provisions all code
base, resources and deployment to the cloud, and gives you templates you can
choose from whenever you need a new bot. The server has a database and service 
backend allowing you to further modify your bot package directly by downloading 
a zip file, editing and uploading it back to the server (deploying process) with 
no code. The Bot Server also provides a framework to develop bot packages in a more
advanced fashion writing custom code in editors like Visual Studio Code, Atom or Brackets.

Everyone can create bots by just copying and pasting some files and using their
favorite tools from Office (or any text editor) or Photoshop (or any image
editor). BASIC can be used to build custom dialogs so Bot can be extended just like VBA for Excel  (currently in alpha).

![General Bot Reference Architecture](https://raw.githubusercontent.com/GeneralBots/BotBook/master/images/general-bots-reference-architecture.png)

## Samples

Several samples, including a Bot for AD Password Reset, are avaiable on the [repository list](https://github.com/GeneralBots).

### Using complete General Bots Conversational Data Analytics

![](https://user-images.githubusercontent.com/14840374/178154826-8188029e-b4f4-48aa-bc0d-126307ce5121.png)

```
TALK  "General Bots Labs presents FISCAL DATA SHOW BY BASIC" 

TALK "Gift Contributions to Reduce the Public Debt API (https://fiscaldata.treasury.gov/datasets/gift-contributions-reduce-debt-held-by-public/gift-contributions-to-reduce-the-public-debt)" 
 
result = GET "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/gift_contributions?page[size]=500" 
data = result.data 
data = SELECT YEAR(record_date) as Yr, SUM(CAST(contribution_amt AS NUMBER)) AS Amount FROM data GROUP BY YEAR(record_date) 

TALK "Demonstration of Gift Contributions with AS IMAGE keyword" 
SET THEME dark 
png = data as IMAGE  
SEND FILE png 

DELAY 5 
TALK " Demonstration of Gift Contributions CHART keyword" 
 img = CHART "bar", data  
SEND FILE img 
```

## Guide

[Read the General Bots BotBook Guide](https://github.com/GeneralBots/BotBook/tree/master/book).

# Videos

Now with the General Bots server you can press F5 on Visual Studio to get a bot factory on your environment* published on November 10th, 2018.

[![General Bot Video](https://raw.githubusercontent.com/pragmatismo-io/BotServer/master/docs/images/video-01-thumb.jpg)](https://www.youtube.com/watch?v=AfKTwljoMOs)

See how easy is to use 'hear' and 'talk' to build Microsoft BOT Framework v4 logic with plain BASIC * published on December 3rd, 2018.

[![See how easy is to use 'hear' and 'talk' to build Microsoft BOT Framework v4 logic with plain BASIC](https://raw.githubusercontent.com/pragmatismo-io/BotServer/master/docs/images/video-02-thumb.jpg)](https://www.youtube.com/watch?v=yX1sF9n9628)
 
  
# Contributing

This project welcomes contributions and suggestions. 
See our [Contribution Guidelines](https://github.com/pragmatismo-io/BotServer/blob/master/CONTRIBUTING.md) for more details.

# Reporting Security Issues

Security issues and bugs should be reported privately, via email, to the Pragmatismo.io Security
team at [security@pragmatismo.io](mailto:security@pragmatismo.io). You should
receive a response within 24 hours. If for some reason you do not, please follow up via
email to ensure we received your original message. 

# License & Warranty

General Bot Copyright (c) Pragmatismo.io. All rights reserved.
Licensed under the AGPL-3.0.       
                                                            
According to our dual licensing model, this program can be used either
under the terms of the GNU Affero General Public License, version 3,
or under a proprietary license.   
                                                        
The texts of the GNU Affero General Public License with an additional
permission and of our proprietary license can be found at and 
in the LICENSE file you have received along with this program.
                                                       
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.
                                                        
"General Bot" is a registered trademark of Pragmatismo.io.
The licensing of the program under the AGPLv3 does not imply a
trademark license. Therefore any rights, title and interest in
our trademarks remain entirely with us.

<a href="https://stackoverflow.com/questions/ask?tags=generalbots">:speech_balloon: Ask a question</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/GeneralBots/BotBook">:book: Read the Docs</a>

General Bots Code Name is [Guaribas](https://en.wikipedia.org/wiki/Guaribas), the name of a city in Brazil, state of Piaui.
[Roberto Mangabeira Unger](http://www.robertounger.com/en/): "No one should have to do work that can be done by a machine".
>>>>>>> 715e3a2 (General Bots 07/12/2022)

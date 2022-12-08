/*****************************************************************************\
|                                               ( )_  _                       |
|    _ _    _ __   _ _    __    ___ ___     _ _ | ,_)(_)  ___   ___     _     |
|   ( '_`\ ( '__)/'_` ) /'_ `\/' _ ` _ `\ /'_` )| |  | |/',__)/' v `\ /'_`\   |
|   | (_) )| |  ( (_| |( (_) || ( ) ( ) |( (_| || |_ | |\__, \| (˅) |( (_) )  |
|   | ,__/'(_)  `\__,_)`\__  |(_) (_) (_)`\__,_)`\__)(_)(____/(_) (_)`\___/'  |
|   | |                ( )_) |                                                |
|   (_)                 \___/'                                                |
|                                                                             |
| General Bots Copyright (c) Pragmatismo.io. All rights reserved.             |
| Licensed under the AGPL-3.0.                                                |
|                                                                             |
| According to our dual licensing model, this program can be used either      |
| under the terms of the GNU Affero General Public License, version 3,        |
| or under a proprietary license.                                             |
|                                                                             |
| The texts of the GNU Affero General Public License with an additional       |
| permission and of our proprietary license can be found at and               |
| in the LICENSE file you have received along with this program.              |
|                                                                             |
| This program is distributed in the hope that it will be useful,             |
| but WITHOUT ANY WARRANTY, without even the implied warranty of              |
| MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                |
| GNU Affero General Public License for more details.                         |
|                                                                             |
| "General Bots" is a registered trademark of Pragmatismo.io.                 |
| The licensing of the program under the AGPLv3 does not imply a              |
| trademark license. Therefore any rights, title and interest in              |
| our trademarks remain entirely with us.                                     |
|                                                                             |
\*****************************************************************************/

'use strict';

import { GBLog } from 'botlib';
import * as en from 'dotenv-extended';

/**
 * @fileoverview General Bots server core.
 */

/**
 * Base configuration for the server like storage.
 */
export class GBConfigService {
  public static getBoolean (value: string): boolean {
    return (this.get(value) as unknown) as boolean;
  }
  public static getServerPort (): string {
    if (process.env.PORT) {
      return process.env.PORT;
    }
    if (process.env.port) {
      return process.env.port;
    }

    return '4242';
  }

  public static init (): any {
    try {
      en.load({
        encoding: 'utf8',
        silent: true,
        path: '.env',
        defaults: '.env.defaults',
        schema: '.env.schema',
        errorOnMissing: true,
        errorOnExtra: false,
        errorOnRegex: true,
        includeProcessEnv: false,
        assignToProcessEnv: true,
        overrideProcessEnv: true
      });
    } catch (e) {
      GBLog.error(e.message);
      process.exit(3);
    }
  }

  public static get (key: string): string | undefined {
    let value = GBConfigService.tryGet(key);

    if (value === undefined) {
      switch (key) {
        case 'CLOUD_USERNAME':
          value = undefined;
          break;
        case 'BOT_ID':
          value = undefined;
          break;
        case 'CLOUD_PASSWORD':
          value = undefined;
          break;
        case 'CLOUD_SUBSCRIPTIONID':
          value = undefined;
          break;
        case 'CLOUD_LOCATION':
          value = undefined;
          break;
        case 'MARKETPLACE_ID':
          value = undefined;
          break;
        case 'MARKETPLACE_SECRET':
          value = undefined;
          break;
        case 'STORAGE_DIALECT':
          value = undefined;
          break;
        case 'STORAGE_STORAGE':
          value = './guaribas.sqlite';
          break;
        case 'GBKB_AUTO_DEPLOY':
          value = false;
          break;
        case 'ADDITIONAL_DEPLOY_PATH':
          value = undefined;
          break;
        case 'STORAGE_SYNC':
          value = 'true';
          break;
        case 'STORAGE_SYNC_ALTER':
          value = 'false';
          break;
        case 'STORAGE_SYNC_FORCE':
          value = 'false';
          break;
        case 'STORAGE_LOGGING':
          value = 'false';
          break;
        case 'STORAGE_ENCRYPT':
          value = 'true';
          break;
        case 'REVERSE_PROXY':
          value = undefined;
          break;
        case 'DISABLE_WEB':
          value = 'false';
          break;
        case 'STORAGE_ACQUIRE_TIMEOUT':
          value = 40000;
          break;
        case 'LOCALE':
          value = 'en';
          break;
        case 'LANGUAGE_DETECTOR':
          value = false;
          break;
        case 'DEFAULT_USER_LANGUAGE':
          value = 'en';
          break;
        case 'DEFAULT_CONTENT_LANGUAGE':
          value = 'en';
          break;
        case 'ENABLE_SPELLING_CHECKER':
          value = false;
          break;
        default:
          GBLog.warn(`Invalid key on .env file: '${key}'`);
          break;
      }
    }

    return value;
  }

  public static tryGet (key: string): any {
    let value = process.env[`container:${key}`];
    if (value === undefined) {
      value = process.env[key];
    }

    return value;
  }
}

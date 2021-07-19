import { Client, Message, TextChannel } from "discord.js";
import SIYCommands from "..";

export default interface ICommandArguments {
  channel: TextChannel;
  message: Message;
  args: string[];
  text: string;
  client: Client;
  prefix: string;
  instance: SIYCommands;
}

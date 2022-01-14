import { CacheType, Interaction } from "discord.js";

export const name = 'interactionCreate';

export async function execute(interaction: Interaction<CacheType>) {
    if (interaction.channel === null) return;
    if (interaction.channel.type === "DM") return;
    
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

    if (interaction.isCommand()){
        const { commandName } = interaction;
    
        if (commandName === 'ping') {
            await interaction.reply('Pong!');
        } else if (commandName === 'server') {
            if (interaction.guild === null) return;
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
        } else if (commandName === 'user') {
            await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
        } else if (commandName === 'fuck') {
            await interaction.reply(`fuck you`);
        }
    }
}
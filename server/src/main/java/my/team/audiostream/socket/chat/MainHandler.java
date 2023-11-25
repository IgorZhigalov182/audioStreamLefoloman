package my.team.audiostream.socket.chat;

import io.netty.channel.Channel;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

import java.util.ArrayList;
import java.util.List;

public class MainHandler extends SimpleChannelInboundHandler<String> {
    private static final List<Channel> channels = new ArrayList<>();
    private static int newClientIndex = 1;
    private String clientName;

    @Override
    public void channelActive(ChannelHandlerContext ctx) {
        System.out.println("Клиент подключился:" + ctx);
        channels.add(ctx.channel());
        clientName = "Клиент №" + newClientIndex;
        newClientIndex++;
        broadcastMessage("SERVER", "Подключился новый клиент: " + clientName);
    }

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String s) {
        System.out.println("Получено сообщение: " + s);
        if (s.startsWith("/")) {
            if (s.startsWith("/changename ")) {
                var newName = s.split("\\s", 2)[1];
                broadcastMessage("SERVER", "Клиент " + clientName
                        + " сменил ник на " + newName);
                clientName = newName;
            }
            return;
        }
        broadcastMessage(clientName, s);
    }

    public void broadcastMessage(String clientName, String message) {
        var out = String.format("[%s]: %s\n", clientName, message);
        channels.forEach(
                channel -> channel.writeAndFlush(out)
        );
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        System.out.println("Клиент " + clientName + " отсоединился");
        channels.remove(ctx.channel());
        broadcastMessage("SERVER", "Клиент " + clientName + "вышел из сети");
        ctx.close();
    }
}

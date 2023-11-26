
## Step 1
    FROM centos:7 as base
    COPY ./chat/pom.xml /app/pom.xml
    COPY ./chat/src/ /app/src
    RUN mkdir -p /app/target
    RUN chown -R 185:0 /app

## Step 2
    FROM maven:3.9.5-amazoncorretto-17-debian-bookworm as build
    COPY --from=base /app /app
    WORKDIR /app
    RUN mvn install

## Step 3
    FROM maven:3.9.5-amazoncorretto-17-debian-bookworm
    USER root
    RUN mkdir -p /app/data
    RUN chown -R 2002:2002 /app/data
    WORKDIR /app
    COPY --from=build --chown=2002:2002 /app/target/server-chat-0.0.1-SNAPSHOT.jar /app/server-chat-0.0.1-SNAPSHOT.jar

# Java options
    RUN jar -xf server-chat-0.0.1-SNAPSHOT.jar /BOOT-INF/classes/gpnca.pem
    ENV JAVA_TOOL_OPTIONS -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:6005
    ENTRYPOINT ["java", "-Dserver.port=8082", "-Dspring.profiles.active=prod", "-jar", "server-chat-0.0.1-SNAPSHOT.jar"]
    ENTRYPOINT ["java", "-Dserver.port=8082", "-jar", "server-chat-0.0.1-SNAPSHOT.jar"]
    USER 2002
    EXPOSE 8082


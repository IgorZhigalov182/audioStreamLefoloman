
## Step 1
    FROM centos:7 as base
    COPY ./server/pom.xml /app/pom.xml
    COPY ./server/src/ /app/src
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
    RUN chown -R 2001:2001 /app/data
    WORKDIR /app
    COPY --from=build --chown=2001:2001 /app/target/server-0.0.1-SNAPSHOT.jar /app/server-0.0.1-SNAPSHOT.jar

# Java options
    RUN jar -xf server-0.0.1-SNAPSHOT.jar /BOOT-INF/classes/gpnca.pem
    ENV JAVA_TOOL_OPTIONS -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
    ENTRYPOINT ["java", "-Dserver.port=8081", "-Dspring.profiles.active=prod", "-jar", "server-0.0.1-SNAPSHOT.jar"]
    ENTRYPOINT ["java", "-Dserver.port=8081", "-jar", "server-0.0.1-SNAPSHOT.jar"]
    USER 2001
    EXPOSE 8081


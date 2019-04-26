FROM openjdk:8u181-jdk-slim-stretch

EXPOSE 8001

WORKDIR /opt

COPY build/libs/ms-generation-0.0.1-SNAPSHOT.jar ms-generation.jar

CMD ["java","-jar","ms-generation.jar"]

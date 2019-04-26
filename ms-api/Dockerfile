FROM openjdk:8u181-jdk-slim-stretch

EXPOSE 8083

WORKDIR /opt

COPY build/libs/ms-api-0.0.1-SNAPSHOT.jar ms-api.jar

CMD ["java","-jar","ms-api.jar"]

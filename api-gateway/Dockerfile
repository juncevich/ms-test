FROM openjdk:8u181-jdk-slim-stretch

EXPOSE 8080

WORKDIR /opt

COPY build/libs/api-gateway-0.0.1-SNAPSHOT.jar api-gateway.jar

CMD ["java","-jar","api-gateway.jar"]

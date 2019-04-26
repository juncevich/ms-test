FROM openjdk:8u181-jdk-slim-stretch

EXPOSE 8761

WORKDIR /opt

COPY build/libs/ms-discovery-0.0.1-SNAPSHOT.jar discovery.jar

CMD ["java","-jar","discovery.jar"]

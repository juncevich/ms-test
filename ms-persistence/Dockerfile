FROM openjdk:8u181-jdk-slim-stretch

EXPOSE 8002

WORKDIR /opt

COPY build/libs/ms-persistence-0.0.1-SNAPSHOT.jar ms-persistence.jar

CMD ["java","-jar","ms-persistence.jar"]

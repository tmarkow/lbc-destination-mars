package com.kenzie.appserver.repositories.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

import java.util.Objects;

@DynamoDBTable(tableName = "User")
public class UserRecord {
    private String userEmail;
    private String userPassword;
    private String logInAuthorizationCode;

    @DynamoDBHashKey(attributeName = "UserEmail")
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @DynamoDBAttribute(attributeName = "UserPassword")
    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
    @DynamoDBAttribute(attributeName = "LogInAuthorizationCode")
    public String getLogInAuthorizationCode() {
        return logInAuthorizationCode;
    }

    public void setLogInAuthorizationCode(String logInAuthorizationCode) {
        this.logInAuthorizationCode = logInAuthorizationCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserRecord)) return false;
        UserRecord that = (UserRecord) o;
        return userEmail.equals(that.userEmail);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userEmail);
    }
}

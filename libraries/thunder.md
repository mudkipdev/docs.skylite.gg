# Thunder
::: code-group

```kts [Gradle (Kotlin)]
repositories {
    maven("https://maven.skylite.gg")
}

dependencies {
    implementation("gg.skylite:thunder:0.1.0")
}
```

```groovy [Gradle (Groovy)]
repositories {
    maven {
        url 'https://maven.skylite.gg'
    }
}

dependencies {
    implementation 'gg.skylite:thunder:0.1.0'
}
```

```xml [Maven]
<repositories>
    <repository>
        <id>skylite</id>
        <url>https://maven.skylite.gg</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>gg.skylite</groupId>
        <artifactId>thunder</artifactId>
        <version>0.1.0</version>
    </dependency>
</dependencies>
```

:::

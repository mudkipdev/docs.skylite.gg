# Thunder

A simulation anti-cheat for Minestom

## Source Code

> [!NOTE]
> Thunder is currently in early access preview and not accessible publicly.

## Installation

::: code-group

```kts [Gradle (Kotlin)]
repositories {
    maven {
        name = "skylite"
        url = uri("https://maven.skylite.gg/private")

        credentials {
            username = providers.gradleProperty("skyliteUsername").orNull ?: System.getenv("SKYLITE_MAVEN_USERNAME")
            password = providers.gradleProperty("skylitePassword").orNull ?: System.getenv("SKYLITE_MAVEN_PASSWORD")
        }

        content {
            includeModule("gg.skylite", "thunder")
        }
    }
}

dependencies {
    implementation("gg.skylite:thunder:0.1.0")
}
```

```groovy [Gradle (Groovy)]
repositories {
    maven {
        name = 'skylite'
        url = uri('https://maven.skylite.gg/private')

        credentials {
            username = providers.gradleProperty('skyliteUsername').orNull ?: System.getenv('SKYLITE_MAVEN_USERNAME')
            password = providers.gradleProperty('skylitePassword').orNull ?: System.getenv('SKYLITE_MAVEN_PASSWORD')
        }

        content {
            includeModule('gg.skylite', 'thunder')
        }
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
        <url>https://maven.skylite.gg/private</url>
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

<details>
<summary>How do I authenticate a private repository in Maven?</summary>

Add the repository credentials to `~/.m2/settings.xml`:

```xml
<settings>
    <servers>
        <server>
            <id>skylite</id>
            <username>${env.SKYLITE_MAVEN_USERNAME}</username>
            <password>${env.SKYLITE_MAVEN_PASSWORD}</password>
        </server>
    </servers>
</settings>
```

</details>

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/j0MQd4totzA" title="Thunder video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

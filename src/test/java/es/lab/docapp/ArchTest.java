package es.lab.docapp;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("es.lab.docapp");

        noClasses()
            .that()
                .resideInAnyPackage("es.lab.docapp.service..")
            .or()
                .resideInAnyPackage("es.lab.docapp.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..es.lab.docapp.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}

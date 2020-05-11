package es.lab.docapp.repository;

import es.lab.docapp.domain.Documento;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Documento entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocumentoRepository extends JpaRepository<Documento, Long> {

    @Query("select documento from Documento documento where documento.creador.login = ?#{principal.username}")
    List<Documento> findByCreadorIsCurrentUser();
}

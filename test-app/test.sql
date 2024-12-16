--liquibase formatted sql

--changeset ngolovkin:SPIRIT-169-3 stripComments:false endDelimiter:\\
CREATE OR REPLACE VIEW ds.v_document_gap AS
  SELECT *
  FROM (
    SELECT
      d.fiscal_storage_id,
      nvl(last_value(d.fiscal_storage_number)
          OVER (
            PARTITION BY d.fiscal_storage_id
            ORDER BY d.fiscal_storage_number
          ROWS BETWEEN UNBOUNDED PRECEDING AND 1 PRECEDING
            ), 0) prev_storage_number,
      d.fiscal_storage_number,
      d.dt end_dt

    FROM DS.t_document d
  )
  WHERE fiscal_storage_number - prev_storage_number > 1

  UNION ALL

  SELECT
    d.fiscal_storage_id,
    max(d.fiscal_storage_number)     prev_storage_number,
    max(fs.last_document_number) + 1 fiscal_storage_number,
    max(decode(fs.state, 'POSTFISCAL', fs.state_dt, 'ARCHIVE_READING', fs.state_dt, null)) end_dt

  FROM DS.t_document d
    JOIN ds.t_fiscal_storage fs ON fs.id = d.fiscal_storage_id
  GROUP BY d.fiscal_storage_id, fs.id
  HAVING max(fs.last_document_number) - max(d.fiscal_storage_number) > 0

\\

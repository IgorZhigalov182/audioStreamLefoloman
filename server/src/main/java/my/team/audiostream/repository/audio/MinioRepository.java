package my.team.audiostream.repository.audio;

import io.minio.GetObjectArgs;
import io.minio.MinioClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

@Repository
public class MinioRepository implements S3Repository {
    private final Logger logger = LoggerFactory.getLogger(MinioRepository.class);
    private final MinioClient minioClient;

    @Value("${minio.bucket}")
    private String bucket;

    public MinioRepository(MinioClient minioClient) {
        this.minioClient = minioClient;
    }

    @Override
    public byte[] getFile(String path) {
        var rsl =  new byte[0];
        try {
            var response = minioClient.getObject(GetObjectArgs
                    .builder()
                    .bucket(bucket)
                    .object(path)
                    .build());
            rsl = response.readAllBytes();
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
        return rsl;
    }
}

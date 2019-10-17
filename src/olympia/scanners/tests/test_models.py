from olympia.amo.tests import TestCase, addon_factory

from olympia.constants.scanners import CUSTOMS, WAT
from olympia.files.models import FileUpload
from olympia.scanners.models import ScannerResult


class TestScannerResult(TestCase):
    def create_file_upload(self):
        addon = addon_factory()
        return FileUpload.objects.create(addon=addon)

    def create_scanners_result(self):
        upload = self.create_file_upload()
        return ScannerResult.objects.create(upload=upload, scanner=CUSTOMS)

    def test_create(self):
        upload = self.create_file_upload()

        result = ScannerResult.objects.create(upload=upload, scanner=CUSTOMS)

        assert result.id is not None
        assert result.upload == upload
        assert result.scanner == CUSTOMS
        assert result.results == {}
        assert result.version is None

    def test_create_different_entries_for_a_single_upload(self):
        upload = self.create_file_upload()

        customs_result = ScannerResult.objects.create(upload=upload,
                                                      scanner=CUSTOMS)
        wat_result = ScannerResult.objects.create(upload=upload, scanner=WAT)

        assert customs_result.scanner == CUSTOMS
        assert wat_result.scanner == WAT
